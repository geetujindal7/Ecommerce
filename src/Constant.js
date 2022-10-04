import { createContext } from "react";

export const images = [
    {
        image: 'https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?w=2000'
    },
    {
        image: 'https://images.unsplash.com/photo-1606041011872-596597976b25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80'
    },
    {
        image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80'
    },
    {
        image: 'https://thumbs.dreamstime.com/b/perfume-21792735.jpg'
    },
    {
        image: 'https://media.istockphoto.com/photos/face-cream-serum-lotion-moisturizer-and-sea-salt-among-bamboo-leaves-picture-id1136422297?k=20&m=1136422297&s=612x612&w=0&h=fk-Du8-BxBYn4rtint_HULFN5FpUWNeaBQye9DoSzpc='
    },
    {
        image: 'https://st.depositphotos.com/1063437/2337/i/950/depositphotos_23373292-stock-photo-groceries-in-wicker-basket-including.jpghttps://images.unsplash.com/photo-1606041011872-596597976b25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80'
    },
    {
        image: 'https://media.istockphoto.com/photos/eclectic-living-room-interior-with-comfortable-velvet-corner-sofa-picture-id1190440285?k=20&m=1190440285&s=612x612&w=0&h=8e8k0hwB200m1hztqq2ddEQTK9ftGcnLWCbktefeSRI='
    },
]

export const context = createContext(
    {
      addItem: (item) => {},
      items: [],
      removeItem: (id) => {},
      totalAmount: 0,
    }
  );
