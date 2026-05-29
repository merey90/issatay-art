import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

const HiddenGallery = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-20 px-6 transition-colors duration-300 flex flex-col items-center justify-center" style={{ backgroundColor: 'var(--app-bg)' }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl text-center"
      >
        <span className="incised-text mb-8 block text-center">Impressions of Poland</span>
        <div 
          className="w-full aspect-square md:aspect-video rounded-sm shadow-2xl relative overflow-hidden transition-all duration-700 mx-auto border"
          style={{ 
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/issatay-art.firebasestorage.app/o/images%2FImpressions%20of%20Poland.jpg?alt=media')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'var(--zinc-plate)',
            borderColor: 'var(--card-border)'
          }}
        >
          {/* Invisible overlay to further prevent right click / dragging */}
           <div 
             className="absolute inset-0 w-full h-full z-10" 
             onContextMenu={(e) => e.preventDefault()}
           />
        </div>
      </motion.div>
    </div>
  );
};

export default HiddenGallery;
