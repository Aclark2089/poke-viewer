import axios from 'axios';
import { linksResolver } from './utilities';

jest.mock('axios');

const testData = 'data';
const testLinkResponse = {
    data: testData,
};

const expectedLinks = [
    {
        url: 'url1',
    },
    {
        url: 'url2',
    },
];
const expectedContent = [testData, testData];

beforeEach(() => {
    axios.get.mockResolvedValue(testLinkResponse);
});

it('should resolve a collection of links to actual content', async () => {
    const actualContent = await linksResolver(expectedLinks);

    expect(actualContent).toEqual(expectedContent);
});
