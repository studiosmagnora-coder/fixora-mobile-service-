import React from 'react';
import { X } from 'lucide-react';
import { LegalDocType } from './Footer';

interface LegalModalProps {
  docType: LegalDocType | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ docType, onClose }) => {
  if (!docType) return null;

  const isPrivacy = docType === 'privacy';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101B35]/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl border border-[#101B35]/15 max-w-2xl w-full max-h-[85vh] flex flex-col shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-[#101B35]/10 flex items-center justify-between gap-4">
          <h3 id="legal-modal-title" className="font-display font-bold text-lg text-[#101B35]">
            {isPrivacy ? 'Privacy Policy – FIXORA MOBILES' : 'Terms & Conditions – FIXORA MOBILES'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close legal dialog"
            className="w-9 h-9 rounded-lg border border-[#101B35]/10 flex items-center justify-center text-[#172033]/70 hover:text-[#101B35] hover:bg-[#F5F8FC] cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#172033]/80 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                FIXORA MOBILES respects customer privacy and collects only the contact,
                device, and location details needed to evaluate your repair request or provide
                remote support.
              </p>
              <h4 className="font-display font-semibold text-[#101B35]">
                1. Information Collected
              </h4>
              <p>
                Booking and contact forms collect your name, mobile/WhatsApp number, optional
                email, smartphone brand/model, issue description, and Hyderabad address (for
                physical visits).
              </p>
              <h4 className="font-display font-semibold text-[#101B35]">
                2. Device Data Responsibility
              </h4>
              <p>
                Customers are advised to back up personal files before physical hardware
                repairs or software troubleshooting. Technicians access device test menus only
                with customer permission to verify hardware functionality.
              </p>
              <h4 className="font-display font-semibold text-[#101B35]">
                3. Communication
              </h4>
              <p>
                Submitted details are used solely to coordinate appointment verification, share
                transparent repair estimates, and respond to support enquiries.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-display font-semibold text-[#101B35]">
                1. Service Area Scope
              </h4>
              <p>
                Physical doorstep visits, pickup, and drop-off services are offered exclusively
                within eligible zones of Hyderabad, Telangana, India. Remote online support is
                available across India for eligible software and setup issues only.
              </p>
              <h4 className="font-display font-semibold text-[#101B35]">
                2. Appointment Confirmation &amp; Estimates
              </h4>
              <p>
                Submitting the online booking form generates a reference number for tracking
                your request, but an appointment is confirmed only after FIXORA MOBILES accepts
                and schedules the slot. All repairs proceed only after customer approval of the
                shared estimate.
              </p>
              <h4 className="font-display font-semibold text-[#101B35]">
                3. Free Home Service &amp; Charges
              </h4>
              <p>
                Free home service is subject to Hyderabad area eligibility. Applicable spare
                parts, repair labor, and specialized pickup charges are communicated upfront.
              </p>
              <h4 className="font-display font-semibold text-[#101B35]">
                4. Data Recovery &amp; Independent Repair Notice
              </h4>
              <p>
                Data recovery assessments carry no guarantee of retrieval. FIXORA MOBILES is an
                independent multi-brand repair provider and does not claim official manufacturer
                authorization.
              </p>
            </>
          )}
        </div>

        <div className="px-6 py-4 border-t border-[#101B35]/10 bg-[#F5F8FC] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold text-white bg-[#101B35] hover:bg-[#1A2B52] rounded-xl cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
