// /* global expect, it, describe, beforeEach, jest */

// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import Single from './Single';

// describe('Single', () => {
//   let component;

//   const props = {
//     items: [
//       {
//         albums: {
//           name: 'reputation',
//           artists: ['Taylor Swift'],
//           id: '4fW1sFeE43nuZlAw2xtmC3',
//           images: [{
//             url: 'https://i.scdn.co/image/39cb05d373ddb356dd8f5357810ab35fdec9f6e1',
//           }],
//         },
//       },
//     ],
//     routeProps: {
//       match: {
//         params: {
//           albumId: "2x9mn9i1j3xJzz7GEH8We2"
//         },
//       },
//     },
//   };
//   beforeEach(() => {
//     component = mount(<Single {...props} />);
//   });

//   it('Should render successfully', () => {
//     // expect(component.exists()).toEqual(true);
//   });

//   it('Should show one image', () => {
//     // expect(component.find('img').length).to.have.lengthOf(1);
//   });
// });
