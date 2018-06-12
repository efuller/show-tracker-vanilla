import { getShows, getShowDetails } from '../../API';
import data from '../__fixtures__/searchResults.json';
import showResults from '../__fixtures__/singleShow.json';

test('getShows() should exist', () => {
	expect(getShows).not.toBeUndefined();
});

test('getShows(\'homeland\') to return search data', (done) => {
	const expected = data;

	const results = getShows('homeland');

	results.then((res) => {
		expect(res.data).toEqual(expected);
		done();
	});
});

test('getShowDetails() should exist', () => {
	expect(getShowDetails).not.toBeUndefined();
});

test('getShowDetails(1407) should return show details', (done) => {
	const expected = showResults;

	const results = getShowDetails(1407);

	results.then((res) => {
		expect(res.data).toEqual(expected);
		done();
	});

});
