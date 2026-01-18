'use client';

import { Rating as ReactRating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

type RatingProps = {
  value: number;
};

export function Rating({ value }: RatingProps) {
  return <ReactRating style={{ maxWidth: 100 }} value={value} readOnly />;
}
