import { useState, useEffect } from "react";

//https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}

export default function App() {
  // buat nilai inputan awal yang bisa di ubah
  const [amount, setAmount] = useState(1);

  // buat option currency yang bisa di pilih
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  // buat converted
  const [converted, setConverted] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      setIsLoading(true);

      // fetching data
      const fetchData = async () => {
        try {
          const response =
            await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}
`);
          const data = await response.json();
          console.log(data);

          // ubah convertednya untuk nilai output
          setConverted(data.rates[toCurrency]);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      };

      // buat kondisi jika fromCurrency dan toCurrency sama
      if (fromCurrency === toCurrency) setConverted(amount);
      fetchData();
    },

    // render ulang jika amount, fromCurrency, toCurrency di ubah
    [amount, fromCurrency, toCurrency]
  );

  if (isLoading) {
    <h1>Loading...</h1>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="IDR">IDR</option>
        <option value="JPY">JPY</option>
        <option value="THB">THB</option>
        <option value="GBP">GBP</option>
      </select>

      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="IDR">IDR</option>
        <option value="JPY">JPY</option>
        <option value="THB">THB</option>
        <option value="GBP">GBP</option>
      </select>
      <p>
        {converted} {toCurrency}
      </p>
    </div>
  );
}
