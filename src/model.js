import image from './assets/images/icons-coding.png';

export const model = [
  {
    type: 'title',
    value: 'Constructor of sites',
    options: {
      tag: 'h1',
      styles:
        'background-image: linear-gradient(to bottom right, red, yellow); color: #fff; text-align: center',
    },
  },
  {
    type: 'image',
    value: image,
    options: {
      tag: 'img',
      alt: 'picture',
      imageStyles: 'width: 64px; height: auto',
      styles: 'display: flex; justify-content: center;',
    },
  },
  {
    type: 'text',
    value: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    options: {
      styles: 'background: darkblue; color: yellow;',
    },
  },
  {
    type: 'textColumns',
    value: [
      'Apps wrote on pure javaScript',
      'Creating app, test',
      'Used webpack for build ',
    ],
    options: {
      styles: 'padding: 1rem; color: darkgreen',
    },
  },
];
