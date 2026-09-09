One-line: shows where the user is in an ordered process they cannot skip — onboarding, a job-creation flow, a submission.

```jsx
<MultiStepIndicator onClick={jumpBack} steps={[
  { titleText: 'Job details', status: 'fulfilled' },
  { titleText: 'Crew', subtitleText: '2 assigned', status: 'active' },
  { titleText: 'Schedule', status: 'pending' }
]} />
<MultiStepIndicator type="compact" steps={steps} />
```

Three to five steps. Completed steps can be revisited; pending ones cannot be jumped to.
