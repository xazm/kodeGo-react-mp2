//all Invoice DB
const handleAllInvoice = async () => {
  const token = localStorage.getItem("accessToken");
  // let newToken = token.replace(/"/g, "");
  let newToken = token;
  // console.log(token);
  const response = await fetch("http://localhost:5000/get_all_invoice", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setAllInvoiceDB(data);
    });
};

useEffect(() => {
  handleAllInvoice();
}, []); // on load page
