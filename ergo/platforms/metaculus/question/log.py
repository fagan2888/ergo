from dataclasses import dataclass
from typing import Any, Dict

from plotnine import scale_x_log10

from ergo.scale import LogScale

from .continuous import ContinuousQuestion


@dataclass
class LogQuestion(ContinuousQuestion):

    scale: LogScale

    def __init__(
        self, id: int, metaculus: Any, data: Dict, name=None,
    ):
        super().__init__(id, metaculus, data, name)
        self.scale = LogScale(
            float(self.question_range["min"]),
            float(self.question_range["max"]),
            float(self.possibilities["scale"]["deriv_ratio"]),
        )

    def _scale_x(self, xmin: float = None, xmax: float = None):
        return scale_x_log10(limits=(xmin, xmax))
