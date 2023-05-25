// BEGIN
export function Point(x, y) {
  this.getX = function() {
    return x;
  };

  this.getY = function() {
    return y;
  };
}

export function Segment(beginPoint, endPoint) {
  this.getBeginPoint = function() {
    return beginPoint;
  };

  this.getEndPoint = function() {
    return endPoint;
  };
}

export function reverse(segment) {
  const beginPoint = new Point(segment.getEndPoint().getX(), segment.getEndPoint().getY());
  const endPoint = new Point(segment.getBeginPoint().getX(), segment.getBeginPoint().getY());
  return new Segment(beginPoint, endPoint);
}
// END
