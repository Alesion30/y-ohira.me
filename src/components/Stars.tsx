import { FC, Fragment } from 'react';

const Stars: FC<{ star: 0 | 1 | 2 | 3 | 4 | 5 }> = (props: { star: 0 | 1 | 2 | 3 | 4 | 5 }) => {
  return (
    <Fragment>
      {[...new Array(props.star)].map((_, index) => (
        <i key={`fas_${index}`} className="fas fa-star"></i>
      ))}
      {[...new Array(5 - props.star)].map((_, index) => (
        <i key={`far_${index}`} className="far fa-star"></i>
      ))}
    </Fragment>
  );
};

export default Stars;
