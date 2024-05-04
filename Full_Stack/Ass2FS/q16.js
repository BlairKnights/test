const axios = require('axios');

function getActivity() 
{
    return new Promise((resolve, reject) => 
    {
        axios.get('https://www.boredapi.com/api/activity')
        .then(response => 
        {
            if (response.status === 200) 
            {
                resolve(response.data.activity);
            } else {
                reject(new Error(`Unexpected response status: ${response.status}`));
            }
        })
        .catch(error => {
            reject(error);
        });
    });
}

getActivity()
  .then(activity => console.log(`\n You could ${activity} \n`))
  .catch(error => console.error("\n Error:", error, "\n"));
