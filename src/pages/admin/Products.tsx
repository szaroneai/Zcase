import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit2, 
  Trash2, 
  MoreVertical, 
  Package, 
  DollarSign, 
  Tag, 
  Image as ImageIcon,
  Save,
  ArrowLeft
} from 'lucide-react';
import Button from '../../components/Button';

// Mock Product Data
const initialProducts = [
  { id: 1, name: 'ZCASE Flip - Yamaha CL5', sku: 'Z-YAM-CL5', price: 2499.00, stock: 12, category: 'Flip Cases', status: 'Active' },
  { id: 2, name: 'Flight Case - Allen & Heath dLive S5000', sku: 'Z-AH-S5000', price: 1899.00, stock: 5, category: 'Flight Cases', status: 'Low Stock' },
  { id: 3, name: 'Custom Rack 12U Shockmount', sku: 'Z-RACK-12U', price: 850.00, stock: 0, category: 'Racks', status: 'Out of Stock' },
  { id: 4, name: 'ZCASE Flip - DiGiCo SD12', sku: 'Z-DIG-SD12', price: 2699.00, stock: 8, category: 'Flip Cases', status: 'Active' },
  { id: 5, name: 'Cable Trunk - Large', sku: 'Z-TRUNK-L', price: 450.00, stock: 25, category: 'Accessories', status: 'Active' },
];

const AdminProducts: React.FC = () => {
  const [view, setView] = useState<'list' | 'edit'>('list');
  const [products, setProducts] = useState(initialProducts);
  const [currentProduct, setCurrentProduct] = useState<any>(null);

  const handleEdit = (product: any) => {
    setCurrentProduct(product);
    setView('edit');
  };

  const handleCreate = () => {
    setCurrentProduct({ id: Date.now(), name: '', sku: '', price: '', stock: '', category: '', status: 'Draft' });
    setView('edit');
  };

  return (
    <div className="space-y-6">
      {view === 'list' ? (
        <>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black text-gray-900">Products</h1>
              <p className="text-gray-500 mt-1">Manage your product catalog, inventory, and pricing.</p>
            </div>
            <Button onClick={handleCreate} className="flex items-center gap-2">
              <Plus size={18} />
              Add Product
            </Button>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by name, SKU..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zcase-accent focus:border-transparent outline-none"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 border border-gray-200">
                <Filter size={18} />
                <span>Filter</span>
              </button>
              <select className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 border border-gray-200 outline-none">
                <option>All Categories</option>
                <option>Flip Cases</option>
                <option>Flight Cases</option>
                <option>Racks</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-bold tracking-wider">
                  <th className="px-6 py-4">Product Name</th>
                  <th className="px-6 py-4">SKU</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Stock</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                          <Package size={20} />
                        </div>
                        <div className="font-bold text-gray-900">{product.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 font-mono">{product.sku}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs font-bold text-gray-600">{product.category}</span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">${product.price.toFixed(2)}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <span className={`font-bold ${product.stock < 5 ? 'text-red-500' : 'text-green-600'}`}>
                        {product.stock} units
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                        product.status === 'Active' ? 'bg-green-50 text-green-700 border-green-100' :
                        product.status === 'Low Stock' ? 'bg-orange-50 text-orange-700 border-orange-100' :
                        'bg-red-50 text-red-700 border-red-100'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          product.status === 'Active' ? 'bg-green-500' :
                          product.status === 'Low Stock' ? 'bg-orange-500' :
                          'bg-red-500'
                        }`}></span>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => handleEdit(product)} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
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
        /* Edit View */
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setView('list')}
                className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <div>
                <h1 className="text-2xl font-black text-gray-900">
                  {currentProduct?.id ? 'Edit Product' : 'New Product'}
                </h1>
                <p className="text-sm text-gray-500">
                  {currentProduct?.sku ? `SKU: ${currentProduct.sku}` : 'Create a new product listing'}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-medium shadow-sm">
                Discard
              </button>
              <Button onClick={() => setView('list')} className="flex items-center gap-2">
                <Save size={18} />
                Save Product
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Details */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">General Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Product Name</label>
                    <input 
                      type="text" 
                      defaultValue={currentProduct?.name}
                      className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zcase-accent outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Description</label>
                    <textarea 
                      className="w-full p-2.5 border border-gray-200 rounded-lg h-32 focus:ring-2 focus:ring-zcase-accent outline-none"
                      placeholder="Detailed product description..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Media</h3>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                  <ImageIcon className="mx-auto text-gray-400 mb-2" size={32} />
                  <p className="text-sm text-gray-500 font-medium">Click to upload product images</p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 10MB</p>
                </div>
                {/* Mock Uploaded Images */}
                <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-24 h-24 bg-gray-100 rounded-lg border border-gray-200 flex-shrink-0 relative group">
                       <button className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                         <Trash2 size={12} />
                       </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Weight (kg)</label>
                      <input type="number" className="w-full p-2.5 border border-gray-200 rounded-lg" />
                   </div>
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Dimensions (cm)</label>
                      <input type="text" className="w-full p-2.5 border border-gray-200 rounded-lg" placeholder="L x W x H" />
                   </div>
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Material</label>
                      <input type="text" className="w-full p-2.5 border border-gray-200 rounded-lg" />
                   </div>
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Color</label>
                      <input type="text" className="w-full p-2.5 border border-gray-200 rounded-lg" />
                   </div>
                </div>
              </div>
            </div>

            {/* Sidebar Settings */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Pricing</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Base Price</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                      <input 
                        type="number" 
                        defaultValue={currentProduct?.price}
                        className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zcase-accent outline-none" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Discount Price</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                      <input 
                        type="number" 
                        className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zcase-accent outline-none" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Inventory</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">SKU</label>
                    <input 
                      type="text" 
                      defaultValue={currentProduct?.sku}
                      className="w-full p-2.5 border border-gray-200 rounded-lg uppercase font-mono text-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Stock Quantity</label>
                    <input 
                      type="number" 
                      defaultValue={currentProduct?.stock}
                      className="w-full p-2.5 border border-gray-200 rounded-lg" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Status</label>
                    <select 
                      defaultValue={currentProduct?.status}
                      className="w-full p-2.5 border border-gray-200 rounded-lg"
                    >
                      <option>Active</option>
                      <option>Draft</option>
                      <option>Out of Stock</option>
                      <option>Archived</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Organization</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Category</label>
                    <select 
                      defaultValue={currentProduct?.category}
                      className="w-full p-2.5 border border-gray-200 rounded-lg"
                    >
                      <option>Flip Cases</option>
                      <option>Flight Cases</option>
                      <option>Racks</option>
                      <option>Accessories</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Tags</label>
                    <input 
                      type="text" 
                      placeholder="e.g. touring, heavy-duty"
                      className="w-full p-2.5 border border-gray-200 rounded-lg" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
