import React from 'react';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

const CertificatesSection: React.FC = () => {
  return (
    <section id="certificates" className="py-20">
      <div className="text-center mb-12">
         <div className="inline-flex items-center gap-3">
            <ShieldCheckIcon className="w-8 h-8 text-indigo-500" />
            <h2 className="text-4xl md:text-5xl font-extrabold section-title-gradient">
                Credential Certificates
            </h2>
        </div>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mt-4">
          Professional certifications and continuous learning achievements.
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
        <p className="text-gray-600">Certificates will be listed here.</p>
      </div>
    </section>
  );
};

export default CertificatesSection;
