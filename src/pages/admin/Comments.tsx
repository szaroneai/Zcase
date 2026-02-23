import React, { useState } from 'react';
import { 
  MessageSquare, 
  CheckCircle, 
  XCircle, 
  Flag, 
  Trash2, 
  Search
} from 'lucide-react';

// Mock Comments Data
const initialComments = [
  { id: 1, user: 'TourMaster99', email: 'tour@example.com', content: 'Great case! The build quality is exceptional and fits my CL5 perfectly.', date: '2 hours ago', status: 'Approved', rating: 5, post: 'ZCASE Flip - Yamaha CL5' },
  { id: 2, user: 'AudioGuy_UK', email: 'audio@uk.co', content: 'Is there a version available for the SD12 yet?', date: '5 hours ago', status: 'Pending', rating: 0, post: 'New Product Announcements' },
  { id: 3, user: 'SpamBot3000', email: 'spam@bot.net', content: 'Buy cheap followers now!!! Click here.', date: '1 day ago', status: 'Spam', rating: 0, post: 'General Discussion' },
  { id: 4, user: 'SarahJ', email: 'sarah@test.com', content: 'I had some issues with shipping, but customer service resolved it quickly.', date: '2 days ago', status: 'Approved', rating: 4, post: 'Customer Service Update' },
];

const AdminComments: React.FC = () => {
  const [comments] = useState(initialComments);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900">Comments & Moderation</h1>
          <p className="text-gray-500 mt-1">Manage user feedback, reviews, and community discussions.</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search comments..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zcase-accent focus:border-transparent outline-none"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <select className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 border border-gray-200 outline-none">
            <option>All Statuses</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Spam</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="divide-y divide-gray-100">
          {comments.map((comment) => (
            <div key={comment.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-gray-500">
                  {comment.user.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-gray-900">
                      {comment.user} 
                      <span className="text-gray-400 font-normal text-sm ml-2">&lt;{comment.email}&gt;</span>
                    </h4>
                    <span className="text-xs text-gray-500">{comment.date}</span>
                  </div>
                  
                  <div className="mb-2">
                     <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">On: </span>
                     <span className="text-xs font-bold text-zcase-accent hover:underline cursor-pointer">{comment.post}</span>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    {comment.content}
                  </p>

                  <div className="flex items-center gap-3">
                    {comment.status === 'Pending' && (
                      <>
                        <button className="flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-xs font-bold hover:bg-green-100 transition-colors">
                          <CheckCircle size={14} /> Approve
                        </button>
                        <button className="flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-xs font-bold hover:bg-red-100 transition-colors">
                          <XCircle size={14} /> Reject
                        </button>
                      </>
                    )}
                    <button className="text-gray-400 hover:text-gray-600 text-xs font-bold flex items-center gap-1">
                      <MessageSquare size={14} /> Reply
                    </button>
                    <button className="text-gray-400 hover:text-red-500 text-xs font-bold flex items-center gap-1">
                      <Flag size={14} /> Report Spam
                    </button>
                    <button className="text-gray-400 hover:text-red-500 text-xs font-bold flex items-center gap-1 ml-auto">
                      <Trash2 size={14} /> Delete
                    </button>
                  </div>
                </div>
                <div>
                   <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                      comment.status === 'Approved' ? 'bg-green-50 text-green-600 border-green-100' :
                      comment.status === 'Pending' ? 'bg-yellow-50 text-yellow-600 border-yellow-100' :
                      'bg-red-50 text-red-600 border-red-100'
                   }`}>
                      {comment.status}
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminComments;
