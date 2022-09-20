export type StarsProps = {
  star: 0 | 1 | 2 | 3 | 4 | 5
}

export const StarsPresenter: React.FC<StarsProps> = ({ star }) => {
  return (
    <div>
      {[...new Array(star)].map((_, index) => (
        <i key={`fas_${index}`} className='fas fa-star'></i>
      ))}
      {[...new Array(5 - star)].map((_, index) => (
        <i key={`far_${index}`} className='far fa-star'></i>
      ))}
    </div>
  )
}
