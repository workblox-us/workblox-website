import { useState, useRef, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'motion/react';
import { Close, PlayArrow, Pause } from '@mui/icons-material';
import { useThemeColors } from '../hooks/useThemeColors';

interface VideoPreviewModalProps {
  open: boolean;
  onClose: () => void;
}

export function VideoPreviewModal({ open, onClose }: VideoPreviewModalProps) {
  const colors = useThemeColors();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
      if (e.key === ' ' && videoRef.current) {
        e.preventDefault();
        togglePlay();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  const handleClose = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClose();
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop with blur */}
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={handleClose}
            sx={{
              position: 'fixed',
              inset: 0,
              bgcolor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(16px)',
              zIndex: 9998,
            }}
          />

          {/* Modal Container */}
          <Box
            sx={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              p: { xs: 2, sm: 4 },
              pointerEvents: 'none',
            }}
          >
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '1100px',
                pointerEvents: 'auto',
              }}
            >
              {/* Glass Modal Card */}
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '24px',
                  background: colors.isDark
                    ? 'linear-gradient(135deg, rgba(30, 27, 75, 0.9) 0%, rgba(15, 15, 35, 0.9) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 248, 252, 0.95) 100%)',
                  border: colors.isDark 
                    ? '1px solid rgba(139, 92, 246, 0.2)' 
                    : '1px solid rgba(139, 92, 246, 0.15)',
                  backdropFilter: 'blur(40px)',
                  boxShadow: colors.isDark
                    ? '0 0 100px rgba(139, 92, 246, 0.4), 0 50px 100px rgba(0, 0, 0, 0.8)'
                    : '0 0 80px rgba(139, 92, 246, 0.2), 0 50px 100px rgba(0, 0, 0, 0.2)',
                  overflow: 'hidden',
                  p: { xs: 3, sm: 4 },
                }}
              >
                {/* Ambient gradient glow */}
                <Box
                  component={motion.div}
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  sx={{
                    position: 'absolute',
                    top: -100,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80%',
                    height: '300px',
                    background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.3), transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Header */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 3,
                    position: 'relative',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: '1.125rem', sm: '1.25rem' },
                      fontWeight: 600,
                      color: colors.text.primary,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Workblox Preview
                  </Typography>
                  <IconButton
                    onClick={handleClose}
                    sx={{
                      color: colors.text.secondary,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: colors.text.primary,
                        bgcolor: colors.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                        transform: 'rotate(90deg)',
                      },
                    }}
                  >
                    <Close />
                  </IconButton>
                </Box>

                {/* Video Container */}
                <Box
                  onMouseEnter={() => setShowControls(true)}
                  onMouseLeave={() => setShowControls(false)}
                  sx={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '56.25%', // 16:9 aspect ratio
                    borderRadius: '16px',
                    overflow: 'hidden',
                    bgcolor: colors.isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.05)',
                    boxShadow: colors.isDark
                      ? '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(139, 92, 246, 0.2)'
                      : '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 40px rgba(139, 92, 246, 0.1)',
                    mb: 3,
                  }}
                >
                  {/* Animated gradient poster (shown before play) */}
                  {!isPlaying && (
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e3a8a 100%)',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Animated gradient overlay */}
                      <Box
                        component={motion.div}
                        animate={{
                          opacity: [0.4, 0.7, 0.4],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: 'radial-gradient(circle at 30% 50%, rgba(147, 51, 234, 0.4), transparent 60%), radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.3), transparent 60%)',
                        }}
                      />

                      {/* Workblox Logo Text */}
                      <Box sx={{ position: 'relative', textAlign: 'center' }}>
                        <Typography
                          variant="h2"
                          sx={{
                            fontSize: { xs: '2.5rem', sm: '4rem' },
                            fontWeight: 700,
                            background: 'linear-gradient(90deg, #c084fc 0%, #60a5fa 50%, #22d3ee 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: '-0.02em',
                            mb: 2,
                          }}
                        >
                          Workblox
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontSize: '0.875rem',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                          }}
                        >
                          Product Preview
                        </Typography>
                      </Box>
                    </Box>
                  )}

                  {/* Video Element */}
                  <video
                    ref={videoRef}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    onClick={togglePlay}
                  >
                    {/* Replace with your actual video source */}
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Play Button Overlay */}
                  <AnimatePresence>
                    {(!isPlaying || showControls) && (
                      <Box
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: isPlaying 
                            ? 'transparent' 
                            : 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3))',
                          cursor: 'pointer',
                        }}
                        onClick={togglePlay}
                      >
                        <Box
                          component={motion.div}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          animate={!isPlaying ? {
                            scale: [1, 1.05, 1],
                            boxShadow: [
                              '0 0 40px rgba(139, 92, 246, 0.4)',
                              '0 0 60px rgba(139, 92, 246, 0.6)',
                              '0 0 40px rgba(139, 92, 246, 0.4)',
                            ],
                          } : {}}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          sx={{
                            width: { xs: '80px', sm: '100px' },
                            height: { xs: '80px', sm: '100px' },
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.9), rgba(59, 130, 246, 0.9))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 0 40px rgba(139, 92, 246, 0.5)',
                            backdropFilter: 'blur(10px)',
                            border: '2px solid rgba(255, 255, 255, 0.2)',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {isPlaying ? (
                            <Pause sx={{ fontSize: { xs: '2.5rem', sm: '3rem' }, color: 'white' }} />
                          ) : (
                            <PlayArrow sx={{ fontSize: { xs: '2.5rem', sm: '3rem' }, color: 'white', ml: 0.5 }} />
                          )}
                        </Box>
                      </Box>
                    )}
                  </AnimatePresence>
                </Box>

                {/* Supporting Copy */}
                <Box sx={{ textAlign: 'center', maxWidth: '600px', mx: 'auto' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: '1.125rem', sm: '1.25rem' },
                      fontWeight: 600,
                      color: colors.text.primary,
                      mb: 1.5,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    One workspace. Everything connected.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: colors.text.secondary,
                      fontSize: { xs: '0.875rem', sm: '0.9375rem' },
                      lineHeight: 1.7,
                    }}
                  >
                    See how Workblox unifies planning, communication, and execution across your entire team.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </AnimatePresence>
  );
}
