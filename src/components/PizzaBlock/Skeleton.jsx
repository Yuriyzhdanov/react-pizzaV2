import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <rect x="-1" y="222" rx="8" ry="8" width="235" height="28" /> 
    <rect x="0" y="266" rx="8" ry="8" width="234" height="97" /> 
    <rect x="3" y="375" rx="2" ry="2" width="56" height="26" /> 
    <rect x="114" y="373" rx="13" ry="13" width="114" height="35" /> 
    <circle cx="114" cy="109" r="99" />
  </ContentLoader>
)

export default Skeleton
 