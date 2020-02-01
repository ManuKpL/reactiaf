import { collectCoverageFrom } from './collectCoverageFrom';

export const jestConfigOverride = jestConfig => ({
  ...jestConfig,
  collectCoverageFrom: collectCoverageFrom(jestConfig.collectCoverageFrom),
});
