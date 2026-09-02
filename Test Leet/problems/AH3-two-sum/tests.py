import sys
from solution import Solution

# Each case: (nums, target, expected_indices)
# expected is compared order-independently, since the problem allows
# either index order.
CASES = [
    ([2, 7, 11, 15], 9, [0, 1]),
    ([3, 2, 4], 6, [1, 2]),
    ([3, 3], 6, [0, 1]),
]


def run():
    sol = Solution()
    passed = 0
    for i, (nums, target, expected) in enumerate(CASES, 1):
        try:
            result = sol.twoSum(list(nums), target)
        except Exception as e:
            print(f"Case {i}: ERROR — {e}")
            continue

        ok = (
            isinstance(result, list)
            and len(result) == 2
            and sorted(result) == sorted(expected)
            and nums[result[0]] + nums[result[1]] == target
        )
        status = "PASS" if ok else "FAIL"
        if ok:
            passed += 1
        print(f"Case {i}: {status} — nums={nums}, target={target}, got={result}, expected(one valid)={expected}")

    print(f"\n{passed}/{len(CASES)} passed")
    sys.exit(0 if passed == len(CASES) else 1)


if __name__ == "__main__":
    run()
