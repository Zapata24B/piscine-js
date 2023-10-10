function getAcceleration(obj) {
    const { f, m, Δv, Δt, t, d } = obj;
  
    if (f !== undefined && m !== undefined) {
      return m === 0 ? "impossible" : f / m;
    } else if (Δv !== undefined && Δt !== undefined) {
      return Δt === 0 ? "impossible" : Δv / Δt;
    } else if (d !== undefined && t !== undefined) {
      return t === 0 ? "impossible" : (2 * d) / (t * t);
    } else {
      return "impossible";
    }
  }
  