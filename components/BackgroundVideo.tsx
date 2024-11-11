// components/BackgroundVideo.tsx
export default function BackgroundVideo() {
    return (
      <div className="absolute inset-0 -z-10">
        <video 
          width="100%"
          height="100%"
          muted
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/vittanut.mp4" type="video/mp4" />
        </video>
        {/* Capa oscura sobre el video */}
        <div className="absolute inset-0 bg-black/70" />
      </div>
    );
  }