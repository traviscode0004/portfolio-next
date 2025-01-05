'use client';

import { ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 max-w-6xl w-full m-4 p-6 rounded-lg shadow-2xl relative animate-scaleIn">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b border-gray-600 pb-4">
          <h5 className="text-teal-400 text-2xl font-bold">{title}</h5>
          <button
            onClick={onClose}
            className="text-white hover:text-teal-400 focus:outline-none text-2xl transition"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        {/* Body */}
        <div className="text-gray-300 text-lg leading-relaxed overflow-y-auto max-h-96">
          {children}
        </div>
        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-teal-500 hover:bg-teal-400 text-white py-2 px-6 rounded-full font-semibold transition shadow-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
