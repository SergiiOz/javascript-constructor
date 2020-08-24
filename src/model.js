import image from './assets/images/icons-coding.png';
import {
  TitleBlock,
  ImageBlock,
  TextBlock,
  TextColumnsBlock,
} from './classes/blocks';

//=== model ===
export const model = [
  new TitleBlock('Constructor of sites', {
    tag: 'h1',
    styles:
      'background-image: linear-gradient(to bottom right, red, yellow); color: #fff; text-align: center',
  }),
  // {
  //   type: 'title',
  //   value: 'Constructor of sites',
  //   options: {
  //     tag: 'h1',
  //     styles:
  //       'background-image: linear-gradient(to bottom right, red, yellow); color: #fff; text-align: center',
  //   },
  // },

  new ImageBlock(image, {
    tag: 'img',
    alt: 'picture',
    imageStyles: 'width: 64px; height: auto',
    styles: 'display: flex; justify-content: center; margin-bottom: 10px',
  }),
  // {
  //   type: 'image',
  //   value: image,
  //   options: {
  //     tag: 'img',
  //     alt: 'picture',
  //     imageStyles: 'width: 64px; height: auto',
  //     styles: 'display: flex; justify-content: center; margin-bottom: 10px',
  //   },
  // },

  new TextBlock('Lorem ipsum dolor sit, amet consectetur adipisicing elit.', {
    styles: 'background: darkblue; color: yellow;',
  }),
  // {
  //   type: 'text',
  //   value: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  //   options: {
  //     styles: 'background: darkblue; color: yellow;',
  //   },
  // },

  new TextColumnsBlock(
    [
      'Apps wrote on pure javaScript',
      'Creating app, test',
      'Used webpack for build ',
    ],
    {
      styles: 'padding: 1rem; color: darkgreen',
    }
  ),
  // {
  //   type: 'textColumns',
  //   value: [
  //     'Apps wrote on pure javaScript',
  //     'Creating app, test',
  //     'Used webpack for build ',
  //   ],
  //   options: {
  //     styles: 'padding: 1rem; color: darkgreen',
  //   },
  // },
];
