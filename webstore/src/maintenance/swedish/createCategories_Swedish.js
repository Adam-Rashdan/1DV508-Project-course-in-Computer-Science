const fs = require('fs');

const BASE_HREF = 'https://www.bikester.se/';
const BIKE_HREF = BASE_HREF + 'cyklar/';
const products = {
  categories: [
    {
      url: BIKE_HREF + 'mountainbike.html',
      category: 'Mountain Bikes',
      categoryId: 'jDIb5N89mEDpqzMQrwfz',
      topic: 'Bike',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/dv508-webshop.appspot.com/o/images%2Fcategories%2F1556459354446_mountain-bikes.jpg?alt=media&token=13256381-431b-439a-b42d-bc8276a04494',
      productList: [],
    },
    {
      url: BIKE_HREF + 'elcykel-pedelec.html',
      category: 'Electric Bikes',
      categoryId: 'YNqhlC6Iz3xrAEry0bYG',
      topic: 'Bike',
      imageUrl:
        BASE_HREF +
        '/editorial/entrypages/bkse/20180411/Categroy_Header_E-Bikes_2560x500.jpg',
      productList: [],
    },
    {
      url: BIKE_HREF + 'urbanbikes.html',
      category: 'City Bikes',
      categoryId: 'tvM79yT2TpRu04n2ZmDs',
      topic: 'Bike',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/dv508-webshop.appspot.com/o/images%2Fcategories%2F1556459322150_city-bikes.jpg?alt=media&token=704fc2f5-aa82-483a-b36b-ba9a5e0ce57a',
      productList: [],
    },
    {
      url: BASE_HREF + 'cykeldelar/kassett-kedja/kedja-6-7-8-del.html',
      category: 'Chains',
      categoryId: '5DOYaUrWQzV2oQTRXLqd',
      topic: 'Part',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/dv508-webshop.appspot.com/o/images%2Fcategories%2F1556981078913_h_chains.jpg?alt=media&token=1166494c-13f1-4319-877d-17032c39517f',
      productList: [],
    },
    {
      url: BASE_HREF + 'cykeldelar/fjaedergaffel.html',
      category: 'Forks',
      categoryId: '9w0phC4ShtyCTl2VGUtU',
      topic: 'Part',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/dv508-webshop.appspot.com/o/images%2Fcategories%2F1556982142529_h_forks.jpg?alt=media&token=a1cd908e-4ec7-416b-9fe6-2c5879f94426',
      productList: [],
    },
    {
      url: BASE_HREF + 'cykeldelar/saekerhetsutrustning/cykelklocka.html',
      category: 'Bells',
      categoryId: 'GSsUSlRMJRw5364TP4NP',
      topic: 'Accessory',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/dv508-webshop.appspot.com/o/images%2Fcategories%2F1556983985816_h_bells.jpg?alt=media&token=c519db9b-b6c7-40be-81a8-54f367f8bc9b',
      productList: [],
    },
    {
      url: BASE_HREF + 'cykeldelar/sadel.html',
      category: 'Saddles',
      categoryId: 'HjtgtyOAtFcuP3noUNiR',
      topic: 'Part',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/dv508-webshop.appspot.com/o/images%2Fcategories%2F1556983263934_h_saddles.jpg?alt=media&token=a7987327-f9c7-45ff-ab8d-8d9588e84715',
      productList: [],
    },
    {
      url: BASE_HREF + 'tillbehor/transport-cykelforvaring/cykelstall.html',
      category: 'Stands',
      categoryId: 'I7gZP3S12znrSN5VaypJ',
      topic: 'Accessory',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/dv508-webshop.appspot.com/o/images%2Fcategories%2F1556983790661_h_stands.jpg?alt=media&token=a90ad477-cae5-43e3-82d7-6e7f09309c82',
      productList: [],
    },
    {
      url: BASE_HREF + 'cykeldelar/daeck-slang/slang.html',
      category: 'Inner tubes',
      categoryId: 'JuKXTrupsYhVNZWxmhH5',
      topic: 'Part',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/dv508-webshop.appspot.com/o/images%2Fcategories%2F1556980779445_h_tubes.jpg?alt=media&token=5f355069-57a4-4937-a004-1d659b0be7f2',
      productList: [],
    },
    {
      url: BASE_HREF + 'cykeldelar/kassett-kedja/kassett-6-7-8-del.html',
      category: 'Cassettes',
      categoryId: 'WhIOU36ygkQ2b8utsIBJ',
      topic: 'Part',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/dv508-webshop.appspot.com/o/images%2Fcategories%2F1556981319530_h_cassettes.jpg?alt=media&token=f3af2cf0-af44-4e51-8dc1-50f041f9e19b',
      productList: [],
    },
    {
      url: BASE_HREF + 'cykeldelar/vaexel/vaexelspak.html',
      category: 'Shifting Components',
      categoryId: 'bndCIVX6at1ar0VNXk9y',
      productList: [],
    },
    {
      url: BASE_HREF + 'cykeldelar/handtag-styrstaangsband/grepp.html',
      category: 'Grips',
      categoryId: 'jQ3rwW8CRZ3FCMd18fpl',
      productList: [],
    },
    {
      url: BASE_HREF + 'cykeldelar/bromsar/faelgbroms-tillbehoer.html',
      category: 'Brakes',
      categoryId: 'm3utlwz7Gsz79R0T6cQy',
      productList: [],
    },
    {
      url: BASE_HREF + 'cykeltillbehoer/cykellampor.html',
      category: 'Lights',
      categoryId: 'n06iE1VaN7eNI44fskkE',
      productList: [],
    },
    {
      url: BASE_HREF + 'cykeltillbehoer/laas.html',
      category: 'Locks',
      categoryId: 'nvOTggIQW6Z5mbMosTqW',
      productList: [],
    },
    {
      url: BASE_HREF + 'cykeltillbehoer/cykelpumpar.html',
      category: 'Pumps',
      categoryId: 'oLKILxUC9U9cIefJUrAX',
      topic: 'Accessory',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/dv508-webshop.appspot.com/o/images%2Fcategories%2F1556979706004_h_pumps.jpg?alt=media&token=81cd7ba8-6faa-407f-b88e-9d12c5009ded',
      productList: [],
    },
    {
      url: BASE_HREF + 'cykeldelar/daeck-slang.html',
      category: 'Tyres',
      categoryId: 'r3DzTJKTS0t79P6qZtUu',
      productList: [],
    },
    {
      url: BASE_HREF + 'cykeldelar/pedaler.html',
      category: 'Pedals',
      categoryId: 'sEHVFFvLQjcsCgBkBvs1',
      productList: [],
    },
  ],
};
console.log('==========Creating Categories==========');
writeFile();
function writeFile() {
  fs.writeFile(
    'src/maintenance/categories.json',
    JSON.stringify(products, null, 4),
    function() {
      console.log(
        'File successfully written! - Check your project directory for the categories.json file'
      );
    }
  );
}
