import React, { useRef, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
  isFullscreen?: boolean;
  size?: "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  isBlur?: boolean;
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  showCloseButton = true,
  isFullscreen = false,
  size = "xl",
  isBlur = true,
  closeOnOutsideClick = true,
  closeOnEscape = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose, closeOnEscape]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const baseClasses = "relative w-full max-w-sm sm:max-w-md md:max-w-lg"; // before lg

  const sizeMap: Record<NonNullable<ModalProps["size"]>, string> = {
    xl: "lg:max-w-xl",
    "2xl": "lg:max-w-2xl",
    "3xl": "lg:max-w-3xl",
    "4xl": "lg:max-w-4xl",
    "5xl": "lg:max-w-5xl",
    "6xl": "lg:max-w-6xl",
  };

  const contentClasses = isFullscreen
    ? "w-full h-full"
    : `${baseClasses} ${sizeMap[size]} rounded-3xl bg-white dark:bg-gray-900`;

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-y-auto z-[99999]">
      {!isFullscreen && (
        <div
          className={`fixed inset-0 h-full w-full bg-gray-400/50 ${
            isBlur ? "backdrop-blur-[32px]" : ""
          } `}
          onClick={() => closeOnOutsideClick && onClose()}
        />
      )}
      <div
        ref={modalRef}
        className={`${contentClasses} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            type="button"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:right-6 sm:top-6 sm:h-11 sm:w-11"
          >
            ✕
          </button>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};

export const ModalHeader: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div
    className={`px-6 pt-6 pb-4 text-lg font-semibold text-center ${className}`}
  >
    {children}
  </div>
);

export const ModalBody: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div className={`px-6 py-4 space-y-4 ${className}`}>{children}</div>
);

export const ModalFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div className={`px-6 py-4 flex gap-2 ${className}`}>{children}</div>
);
