import { useState, useRef, useEffect } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ClickableImage({ src, alt, className = "" }: ClickableImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  const openModal = () => {
    setIsModalOpen(true);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const zoomIn = () => {
    setZoom(prev => Math.min(prev * 1.5, 5));
  };

  const zoomOut = () => {
    setZoom(prev => Math.max(prev / 1.5, 0.5));
  };

  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom(prev => Math.max(0.5, Math.min(5, prev + delta)));
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case '+':
        case '=':
          e.preventDefault();
          zoomIn();
          break;
        case '-':
          e.preventDefault();
          zoomOut();
          break;
        case '0':
          e.preventDefault();
          resetZoom();
          break;
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isModalOpen]);

  return (
    <>
      {/* Clickable Image */}
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer hover:opacity-80 transition-opacity ${className}`}
        onClick={openModal}
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95">
          {/* Backdrop */}
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Control Panel */}
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <button
                onClick={zoomOut}
                className="p-2 bg-black bg-opacity-70 rounded-lg text-white hover:bg-opacity-90 transition-colors"
                title="Zoom Out (-)"
              >
                <ZoomOut size={20} />
              </button>
              <button
                onClick={resetZoom}
                className="p-2 bg-black bg-opacity-70 rounded-lg text-white hover:bg-opacity-90 transition-colors"
                title="Reset Zoom (0)"
              >
                <RotateCcw size={20} />
              </button>
              <button
                onClick={zoomIn}
                className="p-2 bg-black bg-opacity-70 rounded-lg text-white hover:bg-opacity-90 transition-colors"
                title="Zoom In (+)"
              >
                <ZoomIn size={20} />
              </button>
              <button
                onClick={closeModal}
                className="p-2 bg-black bg-opacity-70 rounded-lg text-white hover:bg-opacity-90 transition-colors"
                title="Close (Esc)"
              >
                <X size={20} />
              </button>
            </div>

            {/* Zoom Level Indicator */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black bg-opacity-70 rounded-lg text-white text-sm">
              {Math.round(zoom * 100)}%
            </div>

            {/* Help Text */}
            <div className="absolute bottom-4 left-4 z-10 px-3 py-2 bg-black bg-opacity-70 rounded-lg text-white text-xs max-w-xs">
              <div>Scroll to zoom • Click and drag to pan</div>
              <div>Keyboard: +/- to zoom, 0 to reset, Esc to close</div>
            </div>

            {/* Zoomable Image */}
            <img
              ref={imageRef}
              src={src}
              alt={alt}
              className={`max-w-none transition-transform duration-200 ${
                zoom > 1 ? 'cursor-grab' : 'cursor-zoom-in'
              } ${isDragging ? 'cursor-grabbing' : ''}`}
              style={{
                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                maxHeight: '90vh',
                maxWidth: '90vw'
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
              onClick={(e) => {
                e.stopPropagation();
                if (zoom === 1) {
                  zoomIn();
                }
              }}
              draggable={false}
            />
          </div>
        </div>
      )}
    </>
  );
}