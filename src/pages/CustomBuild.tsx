import React, { useState } from 'react';
import Button from '../components/Button';
import { Upload, CheckCircle } from 'lucide-react';

const CustomBuild: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="min-h-screen bg-zcase-base pt-20 pb-12 flex items-center justify-center">
        <div className="bg-white p-10 rounded-xl border border-zcase-accent text-center max-w-lg mx-4 shadow-xl">
          <CheckCircle size={64} className="text-zcase-accent mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-zcase-text mb-4">Request Received!</h2>
          <p className="text-zcase-muted mb-8">
            Our engineering team will review your specifications and get back to you with a quote and 3D rendering within 24 hours.
          </p>
          <Button onClick={() => setFormSubmitted(false)}>Start Another Request</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zcase-base pt-10 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight text-zcase-text text-center">
            Custom Build Request
          </h1>
          <p className="text-xl text-zcase-muted text-center mb-12 max-w-2xl mx-auto">
            Can't find what you need? We build custom cases for any equipment. 
            Fill out the form below and upload your specs.
          </p>

          <form onSubmit={handleSubmit} className="bg-white border border-zcase-border rounded-xl p-8 md:p-12 shadow-xl">
            
            {/* Contact Info */}
            <h3 className="text-zcase-accent font-bold uppercase tracking-wider mb-6 text-lg border-b border-zcase-border pb-2">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div>
                <label className="block text-sm font-bold text-zcase-text mb-2">Full Name</label>
                <input type="text" className="w-full bg-zcase-surface border border-zcase-border text-zcase-text p-3 rounded focus:border-zcase-accent focus:outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-zcase-text mb-2">Company / Organization</label>
                <input type="text" className="w-full bg-zcase-surface border border-zcase-border text-zcase-text p-3 rounded focus:border-zcase-accent focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-zcase-text mb-2">Email Address</label>
                <input type="email" className="w-full bg-zcase-surface border border-zcase-border text-zcase-text p-3 rounded focus:border-zcase-accent focus:outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-zcase-text mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-zcase-surface border border-zcase-border text-zcase-text p-3 rounded focus:border-zcase-accent focus:outline-none" />
              </div>
            </div>

            {/* Case Specs */}
            <h3 className="text-zcase-accent font-bold uppercase tracking-wider mb-6 text-lg border-b border-zcase-border pb-2">Case Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-zcase-text mb-2">Equipment Make & Model</label>
                <input type="text" className="w-full bg-zcase-surface border border-zcase-border text-zcase-text p-3 rounded focus:border-zcase-accent focus:outline-none" placeholder="e.g. Yamaha CL5" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-zcase-text mb-2">Case Type</label>
                <select className="w-full bg-zcase-surface border border-zcase-border text-zcase-text p-3 rounded focus:border-zcase-accent focus:outline-none">
                  <option>Standard Flight Case</option>
                  <option>Flip Case</option>
                  <option>Shockmount Rack</option>
                  <option>Workstation</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-zcase-text mb-2">Additional Requirements</label>
              <textarea className="w-full bg-zcase-surface border border-zcase-border text-zcase-text p-3 rounded focus:border-zcase-accent focus:outline-none h-32" placeholder="Describe any specific needs: drawers, cable management, specific dimensions, etc."></textarea>
            </div>

            {/* File Upload */}
            <div className="mb-10">
              <label className="block text-sm font-bold text-zcase-text mb-2">Upload Specs / Drawings (PDF, JPG, PNG)</label>
              <div className="border-2 border-dashed border-zcase-border rounded-lg p-8 text-center hover:border-zcase-accent transition-colors cursor-pointer bg-zcase-surface">
                <Upload className="mx-auto text-zcase-muted mb-4" size={32} />
                <p className="text-zcase-muted text-sm">Drag and drop files here, or click to select files</p>
                <p className="text-xs text-zcase-muted mt-2">Max file size: 10MB</p>
              </div>
            </div>

            <div className="text-center">
              <Button type="submit" className="w-full md:w-auto px-12 py-4 text-lg">Submit Request</Button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomBuild;
