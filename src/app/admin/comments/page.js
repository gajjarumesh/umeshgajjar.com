"use client";
import { useState, useEffect } from "react";
import AdminLayout from "@/components/AdminLayout";

export default function AdminComments() {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("pending"); // pending, all
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments();
  }, [filter]);

  const fetchComments = async () => {
    setLoading(true);
    try {
      const url =
        filter === "pending"
          ? "/api/comments?approved=false"
          : "/api/comments";
      const response = await fetch(url);
      const data = await response.json();
      setComments(data.comments || []);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id) => {
    try {
      const response = await fetch("/api/comments", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, approved: true }),
      });

      if (response.ok) {
        setComments(comments.map((c) => (c._id === id ? { ...c, approved: true } : c)));
        alert("Comment approved");
      } else {
        alert("Failed to approve comment");
      }
    } catch (error) {
      console.error("Approve error:", error);
      alert("Error approving comment");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this comment?")) {
      return;
    }

    try {
      const response = await fetch(`/api/comments?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setComments(comments.filter((c) => c._id !== id));
        alert("Comment deleted");
      } else {
        alert("Failed to delete comment");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting comment");
    }
  };

  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Comment Moderation
          </h1>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter("pending")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === "pending"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All Comments
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : comments.length === 0 ? (
          <div className="bg-white rounded-lg p-12 border border-gray-200 text-center">
            <p className="text-gray-600">
              {filter === "pending"
                ? "No pending comments."
                : "No comments yet."}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment._id}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {comment.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {comment.email}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      On:{" "}
                      <span className="font-medium">{comment.blogSlug}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        comment.approved
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {comment.approved ? "Approved" : "Pending"}
                    </span>
                    <span className="text-xs text-gray-500">
                      {comment.createdAt
                        ? new Date(comment.createdAt).toLocaleDateString()
                        : "N/A"}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded p-4 mb-4">
                  <p className="text-gray-700">{comment.content}</p>
                </div>

                <div className="flex gap-2">
                  {!comment.approved && (
                    <button
                      onClick={() => handleApprove(comment._id)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                    >
                      Approve
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(comment._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
