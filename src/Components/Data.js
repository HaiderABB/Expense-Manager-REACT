import React from 'react';

export function CheckAmount(amount) {
  if (amount <= 0 || amount === null || amount === NaN) {
    alert('Enter a valid amount');
    return false;
  } else return true;
}
