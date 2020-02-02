import { collectCoverageFrom } from './collectCoverageFrom';
import { moduleDirectories } from './moduleDirectories';

export const jestConfigOverride = jestConfig => ({
  ...jestConfig,
  collectCoverageFrom: collectCoverageFrom(jestConfig.collectCoverageFrom),
  moduleDirectories: moduleDirectories(jestConfig.moduleDirectories),
});
