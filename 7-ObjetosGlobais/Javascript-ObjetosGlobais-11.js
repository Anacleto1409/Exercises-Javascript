function superficieDoCone(raio, altura){
    x= Math.PI * raio ** 2
    g= Math.hypot(raio,altura)
    
    return (g * Math.PI* raio) + x
    }