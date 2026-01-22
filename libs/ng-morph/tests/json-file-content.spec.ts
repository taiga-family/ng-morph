import {describe, expect, it} from '@jest/globals';
import {JSONFileContent} from 'ng-morph';

describe('JSONFileContent', () => {
    it('should modify JSON', () => {
        const file = new JSONFileContent('{"some": {"path": []}}');

        file.modify(['some', 'path', 0], {value: 3});

        expect(file.getContent()).toBe(`{
  "some": {
    "path": [
      {
        "value": 3
      }
    ]
  }
}`);
    });

    it('should return a value', () => {
        const file = new JSONFileContent(`{
  "some": {
    "path": [
      {
        "value": 3
      }
    ]
  }
}`);

        const value = file.get(['some', 'path', 0]);

        expect(value).toEqual({value: 3});
    });

    it('should remove a value', () => {
        const file = new JSONFileContent(`{
  "some": {
    "path": [
      {
        "value": 3
      }
    ]
  }
}`);

        file.remove(['some', 'path', 0]);

        expect(file.getContent()).toBe(`{
  "some": {
    "path": []
  }
}`);
    });
});
