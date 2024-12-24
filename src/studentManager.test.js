import { describe, it, expect } from 'vitest';
import { StudentManager } from './studentManager.js';

describe('StudentManager', () => {
  describe('checkPassOrFail', () => {
    it('should return "Pass" for grades >= 60', () => {
      const manager = new StudentManager();
      expect(manager.checkPassOrFail(60)).toBe('Pass');
      expect(manager.checkPassOrFail(75)).toBe('Pass');
      expect(manager.checkPassOrFail(100)).toBe('Pass');
    });

    it('should return "Fail" for grades < 60', () => {
      const manager = new StudentManager();
      expect(manager.checkPassOrFail(59)).toBe('Fail');
      expect(manager.checkPassOrFail(45)).toBe('Fail');
      expect(manager.checkPassOrFail(0)).toBe('Fail');
    });
  });

  describe('validateStudent', () => {
    it('should accept valid student data', () => {
      const manager = new StudentManager();
      expect(() => manager.validateStudent('John', 75)).not.toThrow();
      expect(() => manager.validateStudent('Jane', 0)).not.toThrow();
      expect(() => manager.validateStudent('Alice', 100)).not.toThrow();
    });

    it('should throw error for invalid name', () => {
      const manager = new StudentManager();
      expect(() => manager.validateStudent('', 75)).toThrow();
      expect(() => manager.validateStudent('   ', 75)).toThrow();
      expect(() => manager.validateStudent(null, 75)).toThrow();
    });

    it('should throw error for invalid grade', () => {
      const manager = new StudentManager();
      expect(() => manager.validateStudent('John', -1)).toThrow();
      expect(() => manager.validateStudent('John', 101)).toThrow();
      expect(() => manager.validateStudent('John', 'abc')).toThrow();
    });
  });

  describe('addStudent', () => {
    it('should add valid student to the list', () => {
      const manager = new StudentManager();
      const student = manager.addStudent('John', 75);
      
      expect(student).toEqual({
        name: 'John',
        grade: 75,
        status: 'Pass'
      });
      expect(manager.getAllStudents()).toHaveLength(1);
    });

    it('should throw error for invalid student data', () => {
      const manager = new StudentManager();
      expect(() => manager.addStudent('', 75)).toThrow();
      expect(() => manager.addStudent('John', -1)).toThrow();
      expect(manager.getAllStudents()).toHaveLength(0);
    });
  });
});