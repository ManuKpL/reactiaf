const errorBuilder = action => path => `Could not ${action} resource ${path}`;

export const fetchingError = errorBuilder('fetch');
