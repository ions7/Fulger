const Gallery = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1581092918484-8313d3a0e0a2?w=600&q=80',
      title: 'Evacuator profesional',
    },
    {
      url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80',
      title: 'Transport sigur',
    },
    {
      url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80',
      title: 'Echipă de profesioniști',
    },
    {
      url: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80',
      title: 'Asistență rutieră',
    },
    {
      url: 'https://images.unsplash.com/photo-1581092918484-8313d3a0e0a2?w=600&q=80',
      title: 'Tractare vehicule',
    },
    {
      url: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80',
      title: 'Disponibili 24/7',
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="group relative aspect-video overflow-hidden rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${image.url})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-semibold text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
            {image.title}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Gallery
