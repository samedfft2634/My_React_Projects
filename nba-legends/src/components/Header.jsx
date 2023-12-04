import nbaLogo from '../assets/nba-logo.png'
const Header = ({handleChange}) => {
  return (
    <div className='Header'>
      <img src={nbaLogo} alt="" />
      <h3>NBA Legends</h3>
      <input type='search' placeholder='Search Player...' onChange={handleChange} />
    </div>
  )
}

export default Header