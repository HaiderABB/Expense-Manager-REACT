export function CheckAmount(amount) {
  if (amount <= 0 || amount == null || isNaN(amount)) {
    alert('Enter a valid amount');
    return false;
  } else return true;
}
