// src/components/careers/JobApplicationFormSection.tsx
import React, { useState } from 'react';
import type { JobRole } from '../../types/careers';
import { UploadCloud, Send, AlertCircle, CheckCircle } from 'lucide-react';

interface JobApplicationFormSectionProps {
  id: string;
  roles: JobRole[];
  selectedRoleTitle?: string;
}

const JobApplicationFormSection: React.FC<JobApplicationFormSectionProps> = ({ id, roles, selectedRoleTitle }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: selectedRoleTitle || '',
    resume: null as File | null,
    coverLetter: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setSubmitStatus({ type: 'error', message: 'File size exceeds 5MB limit.' });
        setFileName(null);
        setFormData(prev => ({ ...prev, resume: null }));
        e.target.value = '';
        return;
      }
      const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setSubmitStatus({ type: 'error', message: 'Invalid file type. Please upload PDF or DOCX.' });
        setFileName(null);
        setFormData(prev => ({ ...prev, resume: null }));
        e.target.value = '';
        return;
      }
      setFormData(prev => ({ ...prev, resume: file }));
      setFileName(file.name);
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.consent) {
      setSubmitStatus({ type: 'error', message: 'You must agree to the privacy policy.' });
      return;
    }
    if (!formData.resume) {
      setSubmitStatus({ type: 'error', message: 'Please upload your resume.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    console.log("Form Data:", formData);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus({ type: 'success', message: 'Thank you! Your application has been received.' });
    setFormData({ fullName: '', email: '', phone: '', position: '', resume: null, coverLetter: '', consent: false });
    setFileName(null);
    // @ts-ignore
    if (e.target) e.target.reset();
    
    setIsSubmitting(false);
  };

  return (
    <section 
      id={id} 
      className="py-16 md:py-24"
      style={{
        background: 'linear-gradient(135deg, rgba(15, 26, 46, 0.8) 0%, rgba(26, 35, 50, 0.9) 50%, rgba(10, 15, 28, 0.8) 100%)'
      }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-4">Apply Now</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Ready to make an impact? Submit your application through the form below.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl space-y-4 sm:space-y-6 animate-fade-in-up"
          style={{
            background: 'rgba(26, 35, 50, 0.8)',
            backdropFilter: 'blur(10px)',
            borderColor: 'rgba(64, 150, 255, 0.3)',
            animationDelay: '0.3s'
          }}
        >
          {submitStatus && (
            <div className={`p-3 sm:p-4 rounded-md text-sm ${
              submitStatus.type === 'success' 
                ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                : 'bg-red-500/20 text-red-300 border border-red-500/30'
            } flex items-start`}>
              {submitStatus.type === 'success' ? <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-0.5" /> : <AlertCircle size={18} className="mr-2 flex-shrink-0 mt-0.5" />}
              <span className="text-xs sm:text-sm">{submitStatus.message}</span>
            </div>
          )}

          <div>
            <label htmlFor="fullName" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">Full Name <span className="text-blue-400">*</span></label>
            <input 
              type="text" 
              name="fullName" 
              id="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              required 
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base"
              style={{
                background: 'rgba(51, 65, 85, 0.8)',
                borderColor: 'rgba(64, 150, 255, 0.3)'
              }}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">Email Address <span className="text-blue-400">*</span></label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base"
              style={{
                background: 'rgba(51, 65, 85, 0.8)',
                borderColor: 'rgba(64, 150, 255, 0.3)'
              }}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              id="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base"
              style={{
                background: 'rgba(51, 65, 85, 0.8)',
                borderColor: 'rgba(64, 150, 255, 0.3)'
              }}
            />
          </div>

          <div>
            <label htmlFor="position" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">Position Applying For <span className="text-blue-400">*</span></label>
            <select 
              name="position" 
              id="position" 
              value={formData.position} 
              onChange={handleChange} 
              required 
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none text-sm sm:text-base"
              style={{
                background: 'rgba(51, 65, 85, 0.8)',
                borderColor: 'rgba(64, 150, 255, 0.3)'
              }}
            >
              <option value="" disabled>Select a position</option>
              {roles.map(role => (
                <option key={role.id} value={role.title}>{role.title}</option>
              ))}
              <option value="Other">Other / General Application</option>
            </select>
          </div>

          <div>
            <label htmlFor="resume" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">Attach Resume (PDF, DOCX - Max 5MB) <span className="text-blue-400">*</span></label>
            <div 
              className="mt-1 flex justify-center px-4 sm:px-6 pt-4 sm:pt-5 pb-4 sm:pb-6 border-2 border-dashed rounded-lg transition-colors hover:border-blue-500/50"
              style={{
                background: 'rgba(51, 65, 85, 0.6)',
                borderColor: 'rgba(64, 150, 255, 0.3)'
              }}
            >
              <div className="space-y-1 text-center">
                <UploadCloud size={32} className="mx-auto text-gray-500 sm:w-12 sm:h-12" />
                <div className="flex text-xs sm:text-sm text-gray-400 flex-col sm:flex-row items-center">
                  <label htmlFor="resume-upload" className="relative cursor-pointer rounded-md font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    <span>Upload a file</span>
                    <input id="resume-upload" name="resume" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.docx" />
                  </label>
                  <p className="sm:pl-1">or drag and drop</p>
                </div>
                {fileName && <p className="text-xs text-gray-300 pt-1 break-all">{fileName}</p>}
                {!fileName && <p className="text-xs text-gray-500">PDF, DOCX up to 5MB</p>}
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="coverLetter" className="block text-xs sm:text-sm font-medium text-gray-400 mb-1 sm:mb-2">Cover Letter (Optional)</label>
            <textarea 
              name="coverLetter" 
              id="coverLetter" 
              rows={4} 
              value={formData.coverLetter} 
              onChange={handleChange} 
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base"
              style={{
                background: 'rgba(51, 65, 85, 0.8)',
                borderColor: 'rgba(64, 150, 255, 0.3)'
              }}
            />
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input 
                id="consent" 
                name="consent" 
                type="checkbox" 
                checked={formData.consent} 
                onChange={handleChange} 
                className="focus:ring-blue-500 h-4 w-4 text-blue-500 border-gray-600 rounded"
                style={{ background: 'rgba(51, 65, 85, 0.8)' }}
              />
            </div>
            <div className="ml-3 text-xs sm:text-sm">
              <label htmlFor="consent" className="font-medium text-gray-400">
                I agree to the <a href="/privacy-policy" target="_blank" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a> <span className="text-blue-400">*</span>
              </label>
            </div>
          </div>

          <div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                color: 'white'
              }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application <Send size={16} className="ml-2 sm:w-4 sm:h-4"/>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default JobApplicationFormSection;