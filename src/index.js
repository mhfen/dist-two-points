/**
 * Find the distance in meters between two
 * sets of coordinates
 *
 * @param  {Number} lat1 [lat of first coord]
 * @param  {Number} lon1 [long of first coord]
 * @param  {Number} lat2 [lat of second coord]
 * @param  {Number} lon2 [long of second coord]
 * @return {Number}      [the distance in meters]
 */
export default function(lat1, lon1, lat2, lon2) {
  const rad1 = Math.PI * lat1/180;
  const rad2 = Math.PI * lat2/180;
  const theta = lon1-lon2;
  const radTheta = Math.PI * theta/180;
  let dist = Math.sin(rad1) * Math.sin(rad2) + Math.cos(rad1) * Math.cos(rad2) * Math.cos(radTheta);

  dist = Math.acos(dist) * 180/Math.PI * 60 * 1.1515 * 1609.344;

  return Number(dist.toFixed(2));
}
