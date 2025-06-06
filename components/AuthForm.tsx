<div className="w-32 h-32 rounded-full neon-glow overflow-hidden relative mx-auto">
  <img src={profileUrl} className="object-cover w-full h-full" />
  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 5 }} className="absolute top-0 left-0 w-full h-full border-4 border-cyan-400 rounded-full animate-pulse" />
</div>
