import "./Header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg"
        alt=""
      />
      
    </div>
  )
}
