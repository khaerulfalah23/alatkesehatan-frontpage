'use client';

import { useState, useEffect } from 'react';
import { Range } from 'react-range';

interface PriceRangeFilterProps {
  defaultMin?: number;
  defaultMax?: number;
  onChange: (min: number, max: number) => void;
}

const MIN = 0;
const MAX = 10_000_000;

export function PriceRangeFilter({
  defaultMin = MIN,
  defaultMax = MAX,
  onChange,
}: PriceRangeFilterProps) {
  const [values, setValues] = useState([defaultMin, defaultMax]);

  useEffect(() => {
    onChange(values[0], values[1]);
  }, [onChange, values]);

  return (
    <div className='space-y-2'>
      <h4 className='text-sm font-medium'>Price Range:</h4>
      <p className='text-muted-foreground'>
        RP{values[0].toLocaleString()} - RP{values[1].toLocaleString()}
      </p>

      <Range
        step={50000}
        min={MIN}
        max={MAX}
        values={values}
        onChange={setValues}
        renderTrack={({ props, children }) => (
          <div {...props} className='h-2 w-full rounded-full bg-accent'>
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className='h-4 w-4 rounded-full bg-primary border border-white shadow'
          />
        )}
      />
    </div>
  );
}
