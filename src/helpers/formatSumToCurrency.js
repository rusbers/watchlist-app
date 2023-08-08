const formatSumToCurrency = (number) => {
  const options = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    trailingZeroDisplay: 'stripIfInteger',
  });

  return options.format(number);
};

export default formatSumToCurrency;
