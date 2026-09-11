import matplotlib.pyplot as plt
import numpy as np

# Axes = the 7 tracker folders. Score 0-10, target line shown per axis.
labels = [
    "FDE Role\n(1/6 pass)",
    "AI Eng Book\n(0.6/10 ch)",
    "DDIA Book\n(2.3/14 ch)",
    "NeetCode\n(5/150)",
    "Test Builds\n(3/22)",
    "GPU Lab\n(0/12)",
    "Job Search\n(0 apps)",
]

# current score, scaled 0-10
current = [3.6, 0.6, 1.6, 0.3, 1.4, 0.0, 0.0]
target = [8, 10, 10, 10, 10, 10, 10]

pct = [round(c / t * 100) for c, t in zip(current, target)]
overall_pct = round(sum(current) / sum(target) * 100)
labels = [f"{lab}\n{p}%" for lab, p in zip(labels, pct)]

N = len(labels)
angles = np.linspace(0, 2 * np.pi, N, endpoint=False).tolist()
current += current[:1]
target += target[:1]
angles += angles[:1]

fig, ax = plt.subplots(figsize=(8, 8), subplot_kw=dict(polar=True))
ax.set_theta_offset(np.pi / 2)
ax.set_theta_direction(-1)

ax.set_ylim(0, 10)
ax.set_yticks([2, 4, 6, 8, 10])
ax.set_yticklabels(["2", "4", "6", "8", "10"], color="gray", size=8)

ax.plot(angles, target, linewidth=2, linestyle="--", color="crimson", label="Target")
ax.fill(angles, target, color="crimson", alpha=0.05)

ax.plot(angles, current, linewidth=2, color="steelblue", label="Current")
ax.fill(angles, current, color="steelblue", alpha=0.25)

ax.set_xticks(angles[:-1])
ax.set_xticklabels(labels, size=10)

ax.set_title(
    f"FDE Prep — Current vs Target  (overall: {overall_pct}%)",
    size=14, weight="bold", pad=30,
)
ax.legend(loc="upper right", bbox_to_anchor=(1.3, 1.1))

plt.tight_layout()
import os
out = os.path.join(os.path.dirname(__file__), "progress-radar.png")
plt.savefig(out, dpi=150)
print("saved:", out)
