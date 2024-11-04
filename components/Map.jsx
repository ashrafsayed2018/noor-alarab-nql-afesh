function Map() {
  return (
    <div className="mt-20">
      <h2 className="headingColor">موقعنا على الخريطه</h2>
      <span className="headingBorderColor"></span>
      <div className="w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475324.7393261735!2d39.49134226902236!3d21.449889763688766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2z2KzYr9ipINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2skw!4v1730735095075!5m2!1sar!2skw"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          className="w-full h-[600px]"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Map
