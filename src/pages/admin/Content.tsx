import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  Eye, 
  CheckCircle, 
  XCircle,
  Save,
  Image as ImageIcon
} from 'lucide-react';
import Button from '../../components/Button';

// Mock Data
const initialArticles = [
  { id: 1, title: 'Introducing the New ZCASE Flip Series', author: 'Admin', status: 'Published', date: '2024-02-20', views: 1240 },
  { id: 2, title: 'How to Maintain Your Flight Case', author: 'Support Team', status: 'Draft', date: '2024-02-18', views: 0 },
  { id: 3, title: 'Top 5 Consoles for 2024 Tours', author: 'Tech Lead', status: 'Published', date: '2024-02-15', views: 3502 },
  { id: 4, title: 'Custom Foam Inserts Guide', author: 'Admin', status: 'Archived', date: '2024-01-30', views: 890 },
];

const AdminContent: React.FC = () => {
  const [view, setView] = useState<'list' | 'edit'>('list');
  const [articles, setArticles] = useState(initialArticles);
  const [currentArticle, setCurrentArticle] = useState<any>(null);

  const handleEdit = (article: any) => {
    setCurrentArticle(article);
    setView('edit');
  };

  const handleCreate = () => {
    setCurrentArticle({ id: Date.now(), title: '', content: '', status: 'Draft' });
    setView('edit');
  };

  const handleSave = () => {
    // Save logic would go here
    setView('list');
  };

  return (
    <div className="space-y-6">
      {view === 'list' ? (
        <>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black text-gray-900">Content Management</h1>
              <p className="text-gray-500 mt-1">Manage articles, blog posts, and page content.</p>
            </div>
            <Button onClick={handleCreate} className="flex items-center gap-2">
              <Plus size={18} />
              Create New
            </Button>
          </div>

          {/* Filters & Search */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zcase-accent focus:border-transparent outline-none"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 border border-gray-200">
                <Filter size={18} />
                <span>Filter</span>
              </button>
              <select className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 border border-gray-200 outline-none">
                <option>All Status</option>
                <option>Published</option>
                <option>Draft</option>
                <option>Archived</option>
              </select>
            </div>
          </div>

          {/* Articles List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-bold tracking-wider">
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Author</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Views</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {articles.map((article) => (
                  <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">{article.title}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{article.author}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                        article.status === 'Published' ? 'bg-green-50 text-green-600 border-green-100' :
                        article.status === 'Draft' ? 'bg-yellow-50 text-yellow-600 border-yellow-100' :
                        'bg-gray-50 text-gray-600 border-gray-200'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          article.status === 'Published' ? 'bg-green-500' :
                          article.status === 'Draft' ? 'bg-yellow-500' :
                          'bg-gray-500'
                        }`}></span>
                        {article.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{article.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{article.views.toLocaleString()}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => handleEdit(article)} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit2 size={16} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        /* Edit View (WYSIWYG Simulator) */
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setView('list')}
                className="text-gray-500 hover:text-gray-900 font-medium text-sm"
              >
                &larr; Back to List
              </button>
              <h1 className="text-2xl font-black text-gray-900">
                {currentArticle?.id ? 'Edit Article' : 'New Article'}
              </h1>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-medium shadow-sm">
                Save Draft
              </button>
              <Button onClick={handleSave} className="flex items-center gap-2">
                <Save size={18} />
                Publish
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Editor */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <input 
                  type="text" 
                  placeholder="Article Title" 
                  defaultValue={currentArticle?.title}
                  className="w-full text-3xl font-black placeholder-gray-300 border-none outline-none focus:ring-0 p-0 mb-4"
                />
                
                {/* Simulated Toolbar */}
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-200 mb-4 flex-wrap">
                  {['Bold', 'Italic', 'Underline', 'Link', 'Image', 'List', 'Quote'].map((tool) => (
                    <button key={tool} className="px-3 py-1.5 text-xs font-bold text-gray-600 hover:bg-white hover:shadow-sm rounded transition-all">
                      {tool}
                    </button>
                  ))}
                </div>

                {/* Editor Area */}
                <textarea 
                  className="w-full h-96 p-4 text-gray-700 leading-relaxed border-none outline-none resize-none focus:ring-0"
                  placeholder="Start writing your amazing content here..."
                  defaultValue={currentArticle?.content || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."}
                ></textarea>
              </div>

              {/* SEO Section */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">SEO Optimization</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Meta Title</label>
                    <input type="text" className="w-full p-2 border border-gray-200 rounded-lg text-sm" placeholder="Title for search engines" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Meta Description</label>
                    <textarea className="w-full p-2 border border-gray-200 rounded-lg text-sm h-20" placeholder="Description for search results..."></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Keywords</label>
                    <input type="text" className="w-full p-2 border border-gray-200 rounded-lg text-sm" placeholder="Separate with commas..." />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Settings */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Publishing</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Status</label>
                    <select className="w-full p-2 border border-gray-200 rounded-lg text-sm">
                      <option>Draft</option>
                      <option>Published</option>
                      <option>Archived</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Visibility</label>
                    <select className="w-full p-2 border border-gray-200 rounded-lg text-sm">
                      <option>Public</option>
                      <option>Private</option>
                      <option>Password Protected</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Publish Date</label>
                    <input type="date" className="w-full p-2 border border-gray-200 rounded-lg text-sm" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Featured Image</h3>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                  <ImageIcon className="mx-auto text-gray-400 mb-2" size={32} />
                  <p className="text-sm text-gray-500 font-medium">Click to upload</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminContent;
