import { pearsonCorrelationNumber, pearsonCorrelationString } from '../pearson';

describe('Pearson', () => {
  it.each`
    arrayA                  | arrayB                  | result
    ${[1, 2, 3, 4, 5]}      | ${[1, 2, 3, 4, 5]}      | ${1}
    ${[1, 2, 3, 4, 5]}      | ${[5, 4, 3, 2, 1]}      | ${-1}
    ${[1, 2, 3, 4, 5]}      | ${[1, 2, 3, 4, 6]}      | ${0.9863939238321437}
    ${[21, 54, 60, 78, 82]} | ${[20, 54, 54, 65, 45]} | ${0.7843790001900488}
  `('#should work with number', ({ arrayA, arrayB, result }) => {
    expect(pearsonCorrelationNumber(arrayA, arrayB)).toBe(result);
  });

  it.each`
    arrayA                                                                   | arrayB                                                                   | result
    ${['voiture', 'maison', 'chien', 'chat', 'pomme', 'banane', 'orange']}   | ${['voiture', 'maison', 'poisson', 'chat', 'pomme', 'banane', 'orange']} | ${0.9699752721994226}
    ${['voiture', 'maison', 'poisson', 'chat', 'pomme', 'banane', 'orange']} | ${['voiture', 'maison', 'chien', 'chat', 'pomme', 'banane', 'orange']}   | ${0.9699752721994226}
    ${['a', 'b', 'c', 'd', 'e', 'f', 'g']}                                   | ${['a', 'b', 'c', 'd', 'e', 'f', 'g']}                                   | ${1}
    ${['a', 'b', 'c', 'd', 'e', 'f', 'g']}                                   | ${['g', 'f', 'e', 'd', 'c', 'b', 'a']}                                   | ${-1}
    ${['a', 'b', 'c', 'd', 'e', 'f', 'g']}                                   | ${['voiture', 'maison', 'poisson', 'chat', 'pomme', 'banane', 'orange']} | ${-0.5248621914711237}
  `('#should work with string', ({ arrayA, arrayB, result }) => {
    expect(pearsonCorrelationString(arrayA, arrayB)).toBe(result);
  });
});
