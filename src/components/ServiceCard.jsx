const ServiceCard = ({ icon: Icon, title, description, features, image }) => {
  return (
    <div className="group relative bg-white/5 border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/30 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
      {/* Background Image with Overlay */}
      {image && (
        <>
          <img 
            src={image}
            alt={`${title} - Evacuator Chișinău Fulger`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/85 to-dark/95"></div>
        </>
      )}
      
      <div className="relative z-10 p-6 sm:p-8">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors backdrop-blur-sm border border-primary/20">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-poppins font-bold text-white mb-3">
              {title}
            </h3>
            <p className="text-light mb-4 leading-relaxed">
              {description}
            </p>
            {features && (
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-light">
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
